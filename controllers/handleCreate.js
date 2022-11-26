import axios from 'axios';
import BP from 'bp-api';

export const handleCreate = async (req, res) => {
    const bp = new BP('test_vladimir.bpium.ru', 'vladimirkhvan23@gmail.com', '612554097');

    const record = await bp.getRecordById(req.body.payload.catalogId, req.body.payload.recordId);

    console.log(record);
    console.log(record.values['3']);

    const response = await bp.postRecord('12', {
        3: record.values['3'],
        4: record.values['3'],
    });

    console.log(response);

    // const response = await bp.patchRecord(req.body.payload.catalogId, req.body.payload.recordId, {
    //     2: [req.body.payload.values['2'][0]],
    //     3: data.value,
    // });

    res.json({
        success: true,
    });
};
