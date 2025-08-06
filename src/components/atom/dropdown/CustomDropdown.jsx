import { Icon } from "@iconify/react/dist/iconify.js";
import Dropdown from "./Dropdown"; // Adjust path as needed

export const CustomDropdown = () => {
  const menuItems = ['Action', 'Primary action', 'Something else'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Custom Dropdown</h6>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
              <Dropdown>
                <Dropdown.Toggle as="button" className="btn px-18 py-11 text-primary-light">
                  <Icon icon='entypo:dots-three-vertical' className='menu-icon' />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle as="button" className="btn px-18 py-11 text-primary-light">
                  <Icon icon='ph:dots-three-outline-fill' className='menu-icon' />
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