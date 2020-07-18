import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import config from '../../config';
import MediaCard from "../../components/Card/Card";
import {getCafes} from "../../store/actions/cafesActions";
import {connect} from "react-redux";

class Main extends Component {

    componentDidMount() {
        this.props.getCafes();
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} md={10} lg={4}>
                    <Grid container direction="column" spacing={10}>
                        {this.props.cafes.map(cafe => (
                            <Grid item xs key={cafe._id}>
                                <MediaCard
                                    image={config.apiURL + '/' + cafe.image}
                                    title={cafe.title}
                                    rate={cafe.rate}
                                    id={cafe._id}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    cafes: state.cafes.cafes
});

const mapDispatchToProps = dispatch => ({
    getCafes:() => dispatch(getCafes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);