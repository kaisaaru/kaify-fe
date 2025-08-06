import Dropdown from "./Dropdown"; // Adjust path as needed

export const DropdownSizes = () => {
  const menuItems = ['Action', 'Primary action', 'Something else'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Dropdown Sizes</h6>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-primary-600 not-active px-18 py-11 toggle-icon'>
                  Large Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-primary-600 not-active px-16 py-9 toggle-icon'>
                  Medium Action
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className='btn btn-primary-600 not-active px-12 py-6 text-sm toggle-icon'>
                  Small Action
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