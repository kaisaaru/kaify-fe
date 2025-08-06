import React from 'react';
import Dropdown from './Dropdown'; // Adjust path as needed

const BasicDropdownPrimary = () => {
  const menuItems = ['Action', 'Primary action', 'Something else'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Basic Dropdown Primary</h6>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-primary-600 not-active px-18 py-11 toggle-icon'>
                  Default Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-outline-primary-600 not-active px-18 py-11 toggle-icon'>
                  Outline Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-primary-50 text-primary-600 not-active px-18 py-11 toggle-icon'>
                  Focus Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='btn text-primary-600 hover-text-primary px-18 py-11 toggle-icon'>
                  Text Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
  );
};

export {
  BasicDropdownPrimary,
};
