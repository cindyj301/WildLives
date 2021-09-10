import { connect } from "react-redux";

import Navigation from "./navigation";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

export default connect(mSTP)(Navigation);