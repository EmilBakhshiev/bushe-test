import React from 'react';

function Main({ colomun, data, getCurrentTimeFromStamp, handleNumberClick }) {

  return (
    <main>
      <table>
        <thead>
          <tr>
            {colomun.map((item) => {
              return <th>{item}</th>;
            })}
            <th>Подробнее</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th colSpan='5'>Буше есть настоящее</th>
          </tr>
        </tfoot>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td className='col__number' onClick={handleNumberClick}>
                  {item[0]}
                </td>
                <td>{getCurrentTimeFromStamp(item[1])}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td className='select'>
                  <a className='button' href='#'>
                    Select
                  </a>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>Julius Neumann</td>
            <td>e-mail@test-email.com</td>
          </tr>
          <tr>
            <td>Christoph Koller</td>
            <td>e-mail@test-email.com</td>
            <td className='select'>
              <a className='button' href='#'>
                Select
              </a>
            </td>
          </tr>
          <tr>
            <td>Bram Lemmens</td>
            <td>e-mail@test-email.com</td>
            <td className='select'>
              <a className='button' href='#'>
                Select
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='detail'>
        <div className='detail-container'>
          <dl>
            <dt>Provider Name</dt>
            <dd>John Doe</dd>
            <dt>E-mail</dt>
            <dd>email@example.com</dd>
            <dt>City</dt>
            <dd>Detroit</dd>
            <dt>Phone-Number</dt>
            <dd>555-555-5555</dd>
            <dt>Last Update</dt>
            <dd>Jun 20 2014</dd>
            <dt>Notes</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </dd>
          </dl>
        </div>
        <div className='detail-nav'>
          <button className='close'>Close</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
