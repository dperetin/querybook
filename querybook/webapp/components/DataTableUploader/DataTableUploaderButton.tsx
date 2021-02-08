import React, { useState } from 'react';
import { IconButton } from 'ui/Button/IconButton';
import { Modal } from 'ui/Modal/Modal';
import { DataTableUploader } from './DataTableUploader';

interface IDataTableUploaderButtonProps {
    className?: string;
}
export const DataTableUploaderButton: React.FC<IDataTableUploaderButtonProps> = ({
    className = '',
}) => {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const canUpload = true;

    return (
        <>
            canUpload && (
            <IconButton
                className={className}
                size={'18px'}
                noPadding
                onClick={null}
                icon="upload-cloud"
                tooltip="Create Table"
                tooltipPos="left"
            />
            ) showUploadModal && (
            <Modal>
                <DataTableUploader />
            </Modal>
            )
        </>
    );
};
