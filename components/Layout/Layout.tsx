import Header from '../Header/Header';
import { connect } from 'react-redux';
import './Layout.scss';

const mapStateToProps = state => ({
  mobileMenuVisible: state.mobileMenuVisible
});

const Layout = props => (
  <div className={props.mobileMenuVisible ? "menuOpen" : "menuClosed"}>
    <Header />
    {props.children}
  </div>
);

export default connect(mapStateToProps)(Layout);
