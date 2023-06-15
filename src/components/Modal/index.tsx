import React from 'react'
import * as Rsuite from 'rsuite'
interface Props {
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

const Modal:React.FC<Props> = ({title, children}) => {
    const [open, setOpen] = React.useState(false);
    const [ov, setOv] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Rsuite.ButtonToolbar>
                <Rsuite.Button onClick={handleOpen}>Open</Rsuite.Button>
            </Rsuite.ButtonToolbar>
            <Rsuite.Modal overflow={ov} open={open} onClose={handleClose}>
                <Rsuite.Modal.Header>
                <Rsuite.Modal.Title>Rsuite.Modal Title</Rsuite.Modal.Title>
                </Rsuite.Modal.Header>
                <Rsuite.Modal.Body>
                <Rsuite.Placeholder.Paragraph rows={80} />
                </Rsuite.Modal.Body>
                <Rsuite.Modal.Footer>
                <Rsuite.Button onClick={handleClose} appearance="primary">
                    Ok
                </Rsuite.Button>
                <Rsuite.Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Rsuite.Button>
                </Rsuite.Modal.Footer>
            </Rsuite.Modal>
        </>
    )
}

export default Modal