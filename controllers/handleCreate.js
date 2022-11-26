import axios from 'axios';
import BP from 'bp-api';

export const handleCreate = async (req, res) => {
    const bp = new BP('test_vladimir.bpium.ru', 'vladimirkhvan23@gmail.com', '612554097');

    const record = await bp.getRecordById(req.body.payload.catalogId, req.body.payload.recordId);
    
    const repLog = await bp.getRecordById('12', 1);

    console.log('rep log is ', repLog);

    console.log('rep log object is ', repLog.values['3'][0])

    const response = await bp.postRecord('12', {
        3: record,  
        4: record.values['3'],
    }); 

    res.json({
        success: true,
    });
};
