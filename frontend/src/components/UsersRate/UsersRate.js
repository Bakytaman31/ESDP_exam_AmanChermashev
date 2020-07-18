import React, {Component} from 'react';
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {nanoid} from "nanoid";
import {FaStar} from "react-icons/all";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {deleteRate, getUsersRate} from "../../store/actions/ratesActions";

class UsersRate extends Component {
    render() {
        return (
            <>
                <Divider/>
                <Box pt={2} pb={2}>
                    <Typography variant="h3">Your rate</Typography>
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Easy to make</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="simple"
                                    value={this.props.usersRate.food}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.props.usersRate.food ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Quick to make</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="speed"
                                    value={this.props.usersRate.service}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.props.usersRate.service ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Taste</Typography>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={nanoid()}>
                                <input
                                    type="radio"
                                    name="taste"
                                    value={this.props.usersRate.interior}
                                />
                                <FaStar
                                    size={50}
                                    className="star"
                                    color={ratingValue <= this.props.usersRate.interior ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        )
                    })}
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Comment</Typography>
                    <p>{this.props.usersRate.text}</p>
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => this.props.deleteRate(this.props.usersRate._id)}>
                        Delete
                    </Button>
                </Box>
            </>
        );
    }
}

const mapStateToProps = state => ({
    usersRate: state.rates.usersRate
});

const mapDispatchToProps = dispatch => ({
    deleteRate: id => dispatch(deleteRate(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersRate);