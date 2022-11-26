import axios from 'axios';
import * as BP from 'bp-api';

export const handleOrders = async (req, res) => {
    const {data} = await axios.get('https://test.bpium.ru/api/webrequest/request');

    console.log(data.value);
    console.log(req.body.payload);

    const bp = new BP(
        'https://test_vladimir.bpium.ru/',
        'vladimirkhvan23@gmail.com',
        '612554097',
        protocol(https),
        timeout(30000),
    );

    // await bp.patchRecord(req.body.payload.catalogId, req.body.payload.recordId, {
    //     3: value,
    // });

    // console.log(value);

    res.json({
        success: true,
    });
};
