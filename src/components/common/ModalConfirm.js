import { Button, Modal } from "react-bootstrap"

export const ModalConfirm = ({visible, hide, handleDelete}) => {

    return(
        <Modal 
            centered
            backdrop="static"
            keyboard={false}
            onHide={hide}
            show={visible}>
            <Modal.Header>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete the user?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
