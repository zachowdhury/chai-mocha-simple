import React,{ component } from 'react'

export default class Card extends component {

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