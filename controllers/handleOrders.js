import axios from 'axios';
import BP from 'bp-api';

export const handleOrders = async (req, res) => {
    const { data } = await axios.get('https://test.bpium.ru/api/webrequest/request');

    const bp = new BP('test_vladimir.bpium.ru', 'vladimirkhvan23@gmail.com', '612554097');

    await bp.patchRecord(req.body.payload.catalogId, req.body.payload.recordId, {
        2: [req.body.payload.values['2'][0]],
        3: data.value,
    });

    res.json({
        success: true,
    });
};
