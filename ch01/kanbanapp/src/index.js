import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';
import './style.css';

let cardsList = [
    {
      id: 1,
      title: "책읽기",
      description: "전체 책을 읽어야 함. **반드시!!**",
      status: "in-progress",
      color: "yellow",
      tasks: []
    },
    {
      id: 2,
      title: "React v16 코딩하기",
      description: "책 샘플 따라 코드 작성 [예제](https://github.com/pro-react)",
      status: "todo",
      color: "green",
      tasks: [
        {
          id: 1,
          name: "연락처 예제",
          done: true
        },
        {
          id: 2,
          name: "Kanban 예제",
          done: false
        },
        {
          id: 3,
          name: "간단한 실험",
          done: false
        }
      ]
    }
  ];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
