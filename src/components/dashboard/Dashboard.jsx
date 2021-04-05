import React, { Component } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllRecord, getCurrencyRecord } from '../../redux/actions';
import Chart from "react-google-charts";

function mapDispatchToProps(dispatch) {
    return {
        getCurrencyRecordAction: () => dispatch(getCurrencyRecord()),
        getAllRecordAction: (currency) => dispatch(getAllRecord(currency)),
    };
}

const mapStateToProps = state => {
    return {
        getCurrencyList: state.getCurrencyList,
        getAllRecordList: state.getAllRecordList
    };
};

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrency: "USD"
        }
    }

    componentDidMount() {
        const { getCurrencyRecordAction, getAllRecordAction } = this.props;
        const { selectedCurrency } = this.state;
        getAllRecordAction(selectedCurrency)
        getCurrencyRecordAction();
    }

    handleChange = (event) => {
        const { getAllRecordAction } = this.props;
        getAllRecordAction(event.target.value)
        this.setState({ selectedCurrency: event.target.value })
    }


    render() {
        const { getCurrencyList, getAllRecordList } = this.props;
        const { selectedCurrency } = this.state;
        const CurrencyList = getCurrencyList.bpi != null ? Object.values(getCurrencyList.bpi) : [];
        const key = selectedCurrency === "USD" ? 0 : selectedCurrency === "GBP" ? 1 : 2;
        const currenyDetails = CurrencyList[key];
        const dateList = getAllRecordList.bpi != null ? Object.keys(getAllRecordList.bpi) : [];
        const valueList = getAllRecordList.bpi != null ? Object.values(getAllRecordList.bpi) : [];

        return (
            <Card style={{ borderColor: 'green', margin:'10px' }}>
                <Row>
                    <Col sm={4}>
                        <Form style={{ marginTop: '100px', marginLeft: '50px' }}>
                            <Form.Group controlId="bitCoin">
                                <Form.Label>1 BitCoin Equals</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    {
                                        CurrencyList && CurrencyList.map((currency) => {
                                            return (
                                                <option key={currency.code} value={currency.code} >{currency.description}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                            <p style={{ fontSize: 40 }}>
                                <b><span>{currenyDetails.rate}</span>{' '}
                                    <span>{currenyDetails.description}</span></b>
                            </p>
                        </Form>
                    </Col>
                    <Col sm={8}>
                        <Chart
                            width={"100%"}
                            height={"400px"}
                            chartType="LineChart"
                            loader={<div>Loading..........</div>}
                            data={[
                                ["Month", "Rate"],
                                [dateList[0], valueList[0]],
                                [dateList[1], valueList[1]],
                                [dateList[2], valueList[2]],
                                [dateList[3], valueList[3]],
                                [dateList[4], valueList[4]],
                                [dateList[5], valueList[5]],
                                [dateList[6], valueList[6]],
                                [dateList[7], valueList[7]],
                                [dateList[8], valueList[8]],
                                [dateList[9], valueList[9]],
                                [dateList[10], valueList[10]],
                                [dateList[11], valueList[11]],
                                [dateList[12], valueList[12]],
                                [dateList[13], valueList[13]],
                                [dateList[14], valueList[14]],
                                [dateList[15], valueList[15]],
                                [dateList[16], valueList[16]],
                                [dateList[17], valueList[17]],
                                [dateList[18], valueList[18]],
                                [dateList[19], valueList[19]],
                                [dateList[20], valueList[20]],
                                [dateList[21], valueList[21]],
                                [dateList[22], valueList[22]],
                                [dateList[23], valueList[23]],
                                [dateList[24], valueList[24]],
                                [dateList[25], valueList[25]],
                                [dateList[26], valueList[26]],
                                [dateList[27], valueList[27]],
                                [dateList[28], valueList[28]],
                                [dateList[29], valueList[29]],
                                [dateList[30], valueList[30]],
                                [dateList[31], valueList[31]],
                                [dateList[32], valueList[32]],
                                [dateList[33], valueList[33]],
                                [dateList[34], valueList[34]],
                                [dateList[35], valueList[35]],
                                [dateList[36], valueList[36]],
                                [dateList[37], valueList[37]],
                                [dateList[38], valueList[38]],
                                [dateList[39], valueList[39]],
                                [dateList[40], valueList[40]],
                                [dateList[41], valueList[41]],
                                [dateList[42], valueList[42]],
                                [dateList[43], valueList[43]],
                                [dateList[44], valueList[44]],
                                [dateList[45], valueList[45]],
                                [dateList[46], valueList[46]],
                                [dateList[47], valueList[47]],
                                [dateList[48], valueList[48]],
                                [dateList[49], valueList[49]],
                                [dateList[50], valueList[50]],
                                [dateList[51], valueList[51]],
                                [dateList[52], valueList[52]],
                                [dateList[53], valueList[53]],
                                [dateList[54], valueList[54]],
                                [dateList[55], valueList[55]],
                                [dateList[56], valueList[56]],
                                [dateList[57], valueList[57]],
                                [dateList[58], valueList[58]],
                                [dateList[59], valueList[59]],
                            ]}
                            options={{
                                hAxis: {
                                    title: "Months",
                                },
                                vAxis: {
                                    title: "Currency Rate",
                                },
                            }}
                            rootProps={{ "data-testid": "1" }}
                        />
                    </Col>
                </Row>
            </Card>
        );
    }
}

const DashboardPage = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);

export default DashboardPage;