import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard)