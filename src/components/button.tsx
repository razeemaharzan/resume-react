import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface ButtonProps {
    label: string;
    variant?: string;
    onClick: () => void;
}

const RBButton: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
    return (
        <Row>
            <Col>
                <Button as="a" variant={variant} onClick={onClick}>
                    {label}
                </Button>
            </Col>
        </Row>
    )
}

export default RBButton;