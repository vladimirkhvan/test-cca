import axios from 'axios';
import BP from 'bp-api';

export const handleOrders = async (req, res) => {
    const { data } = await axios.get('https://test.bpium.ru/api/webrequest/request');

    console.log(data.value);
    console.log(req.body.payload);

    const bp = new BP('https://test_vladimir.bpium.ru/', 'vladimirkhvan23@gmail.com', '612554097');

    console.log(bp);

    // const response = await bp.getRecordById(req.body.payload.catalogId, req.body.payload.recordId)

    // const response = await bp.patchRecord(req.body.payload.catalogId, req.body.payload.recordId, {
    //     2: [req.body.payload.values['2'][0]],
    //     3: data.value,
    // });

    // console.log(response);

    res.json({
        success: true,
    });
};
