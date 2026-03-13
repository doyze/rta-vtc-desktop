
import React, { Component } from 'react';

import logoURL from '../../../images/logo.png';

/**
 * Logo component.
 */
export default class Logo extends Component {

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <img
                alt = 'RTA VTC'
                src = { logoURL }
                                    style = {{
                                                                height: 32,
                                                                width: 'auto'
                                    }} />
        );
    }
}
