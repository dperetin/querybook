import React, { useState } from 'react';
import { StepsBar } from 'ui/StepsBar/StepsBar';
import { Divider } from 'ui/Divider/Divider';
interface IDataTableUploader {
    uploadFromExecution: null | number;
}

const uploadSteps = ['Source', 'Table Specs', 'Upload'];

export const DataTableUploader: React.FC<IDataTableUploader> = ({
    uploadFromExecution,
}) => {
    const [step, useStep] = useState(uploadFromExecution != null ? 1 : 0);

    return (
        <div className={'DataTableUploader'}>
            <div>
                <StepsBar steps={uploadSteps} activeStep={step} />
            </div>
            <Divider />
            <div>Hello World</div>
        </div>
    );
};
