import React, {FC} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import s from "./InfoModal.module.css"


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 4,
};

type InfoModalType = {
    active: boolean
}
export const InfoModal: FC<InfoModalType> = ({active}) => {

    return (
        <div>
            <Modal
                open={active}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={s.modal}>
                            Your message has been sent
                            Thanks for the feedback
                    </div>
                </Box>
            </Modal>
        </div>
    );
};