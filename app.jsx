import React from 'react';
import reactdom from 'reactdom';
class app extends react.component
{
    render()
    {
        return(<h1>helloworld</h1>)
    }
}
reactdom.render(<app/>,document.getElementById('root'));
