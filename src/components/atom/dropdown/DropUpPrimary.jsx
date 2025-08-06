import Dropdown from "./Dropdown"; // Adjust path as needed

const DropUpPrimary = () => {
  const menuItems = ['Action', 'Primary action', 'Something else'];
  return (
      <div className='col-xl-6'>
        <div className='card h-100 p-0'>
          <div className='card-header border-bottom bg-base py-16 px-24'>
            <h6 className='text-lg fw-semibold mb-0'>Drop up Primary</h6>
          </div>
          <div className='card-body p-24'>
            <Dropdown direction="up">
              <Dropdown.Toggle className='btn btn-primary-600 not-active px-18 py-11 toggle-icon icon-up'>
                Dropup Action
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