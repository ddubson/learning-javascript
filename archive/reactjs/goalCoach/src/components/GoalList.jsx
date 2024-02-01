import React from 'react'
import {connect} from 'react-redux'
import {goalRef} from '../firebase'
import {setGoals} from '../actions'
import GoalItem from './GoalItem'

class GoalList extends React.Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                //let goalObject = goal.val();
                const {email, title} = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey});
            })

            this.props.setGoals(goals);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.goals.map((goal,k) => {
                        return (
                            <GoalItem key={k} goal={goal} />
                        );
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {goals} = state;
    return {goals};
}

export default connect(mapStateToProps, {setGoals})(GoalList);
