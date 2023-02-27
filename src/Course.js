import React, { Component } from "react";

class Course extends Component {

    static defaultProps = {
        course: {},
        onRemove: () => { }
    }

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.onRemove(this.props.course.id);
    }

    render() {

        const { props } = this;
        const { course } = props;

        return (
            <li className="course">
                <div>
                    {course.name}
                </div>
                <button onClick={this.remove}>X</button>
                <img src={course.img}></img>
                <div>{course.desc}</div>
            </li>
        )
    }
}

export default Course;