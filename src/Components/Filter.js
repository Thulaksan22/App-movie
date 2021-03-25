import React, { Component } from 'react'

import { DropdownButton, Dropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <DropdownButton><FontAwesomeIcon icon={faFilter}/>
                    <Dropdown.Item>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Thriller
                        </label>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Comedy
                        </label>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Animation
                        </label>
                    </Dropdown.Item>


                    <Dropdown.Item>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Drame
                        </label>
                    </Dropdown.Item>

                </DropdownButton>
            </div>
        )
    }
}
