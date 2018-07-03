
import PropTypes from 'prop-types';
import ThemeStyle from './Theme.scss'
        
        
class Theme extends React.Component {
    render() {
      console.log(this.props.data);
      return(
        <div>
        <style dangerouslySetInnerHTML={{ __html: ThemeStyle }} />

          <h1 class="h1-h2">LOGIN</h1>
        </div>
      );
    }
  }
        
Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};
        
export default Theme;
        