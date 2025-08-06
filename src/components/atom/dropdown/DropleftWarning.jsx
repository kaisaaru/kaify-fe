import Dropdown from "@/components/atom/dropdown/Dropdown";
import React from "react";

export const DroprightWarning = () => {
  const menuItems = ['Action', 'Primary action', 'Something else'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Dropright Warning</h6>
          </div>
          <div className='card-body p-24'>
            <Dropdown direction="end">
              <Dropdown.Toggle className='btn btn-warning-600 not-active px-18 py-11 toggle-icon icon-right'>
                Dropright Action
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
  );
};