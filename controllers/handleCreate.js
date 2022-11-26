import axios from 'axios';
import BP from 'bp-api';

export const handleCreate = async (req, res) => {
    const bp = new BP('test_vladimir.bpium.ru', 'vladimirkhvan23@gmail.com', '612554097');

    const record = await bp.getRecordById(req.body.payload.catalogId, req.body.payload.recordId);

    console.log(record);

    const response = await bp.postRecord(req.body.payload.catalogId, {
        3: req.body.payload.catalogId,
        4: req.body.payload.values['3'],
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
