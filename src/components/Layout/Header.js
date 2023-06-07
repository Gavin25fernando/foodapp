import {Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <Header className={classes.header}>
            <h2>React meal app with sachila aiya</h2>
            <HeaderCartButton/>

        </Header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table of food'/>
        </div>
    </Fragment>
};

export default Header;
