import Dropdown from "./Dropdown"; // Adjust path as needed

const GroupedDropdownButtons = () => {
  const menuItems = ['Dropdown link', 'Another link'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Grouped & Split Dropdown Buttons</h6>
          </div>
          <div className='card-body p-24'>
            <div className='d-flex flex-wrap align-items-center gap-3'>
              {/* Standard Button Group with Dropdown */}
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary-600 py-11 px-20">1</button>
                <button type="button" className="btn btn-primary-600 py-11 px-20">2</button>
                <Dropdown>
                  <Dropdown.Toggle className='btn btn-primary-600 toggle-icon'>
                    Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* Split Button Dropdown */}
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-primary-600 py-11 px-20">
                  Split Action
                </button>
                <Dropdown>
                  <Dropdown.Toggle className='btn btn-outline-primary-600 dropdown-toggle-split' />
                  <Dropdown.Menu>
                    {menuItems.map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};