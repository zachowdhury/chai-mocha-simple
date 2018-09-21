import React,{ Component, ComponentType } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class TilesCard extends Component {

 render (){
        return(
            <div className ="class-component">
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                </Typography>
                
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                
                <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                
            </div>
        );    
    }
}