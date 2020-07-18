import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import config from '../../config';
import {connect} from "react-redux";
import {getCafe} from "../../store/actions/cafesActions";
import Divider from "@material-ui/core/Divider";
import {getPictures, postPicture} from "../../store/actions/picturesActions";
import Carousel from "../../components/Carousel/Carousel";
import FormElement from "../../components/UI/Form/FormElement";
import Button from "@material-ui/core/Button";
import UsersRate from "../../components/UsersRate/UsersRate";
import Rate from "../../components/Rate/Rate";
import {getUsersRate} from "../../store/actions/ratesActions";

class Cafe extends Component {
    state = {
      image: ''
    };

    fileChangeHandler = e => {
        this.setState({[e.target.name]: e.target.files[0]});
    };

    sendPicture = () => {
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });

        this.props.postPicture(formData, this.props.match.params.id);
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getCafe(id);
        this.props.getPictures(id);
        this.props.getUsersRate(id);
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} md={10} lg={4}>
                    <Grid container direction="column" spacing={10}>
                        <Grid item xs>
                            <Box pt={2} pb={2}>
                                <Typography variant="h2">{this.props.cafe.title}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <img
                                src={config.apiURL + '/' + this.props.cafe.image}
                                alt={this.props.cafe.name}
                                style={{width: "100%"}}
                            />
                        </Grid>
                        <Grid item xs>
                            <Divider/>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h4">Description</Typography>
                            <p>{this.props.cafe.description}</p>
                        </Grid>
                        <Grid item xs>
                            <Divider/>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h4">Gallery</Typography>
                            {this.props.pictures.length > 0 ?
                                <Carousel pictures={this.props.pictures}/>
                                :
                                <p>Nothing yet. Would you like to add some photos ?</p>
                            }
                        </Grid>
                        <Grid item xs>
                            <FormElement
                                type="file"
                                propertyName="image"
                                title="Image"
                                onChange={this.fileChangeHandler}
                            />
                        </Grid>
                        <Grid item xs>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.sendPicture}
                            >
                                save
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Divider/>
                        </Grid>
                        <Grid item xs>
                            {this.props.rate ? <UsersRate cafeId={this.props.match.params.id}/> :
                                <Rate cafeId={this.props.match.params.id}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    cafe: state.cafes.cafe,
    usersRate: state.rates.usersRate,
    pictures: state.pictures.pictures
});

const mapDispatchToProps = dispatch => ({
    getCafe: cafe => dispatch(getCafe(cafe)),
    getPictures: id => dispatch(getPictures(id)),
    postPicture: (picture, id) => dispatch(postPicture(picture, id)),
    getUsersRate: id => dispatch(getUsersRate(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);