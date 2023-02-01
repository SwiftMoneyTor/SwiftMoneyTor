import { Col, Container, Row } from "react-bootstrap";
import Table from "../../Template/Table/Table";
import ReportsHeader from "./ReportsHeader";

const Reports = () => {
    const rows = [
        { id: 1, transaction: 'Hello', items: 'World', total: 50, status: 'Success' },
        { id: 2, transaction: 'DataGridPro', items: 'is Awesome', total: 50, status: 'Failed' },
        { id: 3, transaction: 'MUI', items: 'is Amazing', total: 50, status: 'Success' },
    ];

    const columns = [
        { field: 'transaction', headerName: 'Transaction', width: 500, headerAlign: 'center' },
        { field: 'items', headerName: 'Items', width: 300, align: 'center', headerAlign: 'center' },
        { field: 'total', headerName: 'Total', width: 150, align: 'center', headerAlign: 'center' },
        { field: 'status', headerName: 'Status', width: 150, align: 'center', headerAlign: 'center' },
    ];
    return (<>
        <Container>
            <Row className="py-3">
                <Col>
                    <ReportsHeader />
                </Col>
            </Row>
            <Row className="pb-3">
                <Col>
                    <Table data={{ columns, rows, height: 300 }} />
                </Col>
            </Row>
        </Container>
    </>)
}

export default Reports
