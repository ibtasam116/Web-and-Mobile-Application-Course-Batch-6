import fbLogo from './images/Fb logo.jpeg';
import img5 from './images/insta_cf1rkw.jpg';
import img6 from './images/twiter_y8idrd.png';

function App() {
  return (
    <div className="App">
      <img src={require('./images/images_kktpq7.png')} alt="" width="100%" />
      <table>
        <tr>
          <td width="65%" align="center"><b>Ara Profile</b></td>
        </tr>
        <tr>
          <td>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod suscipit illo aliquid modi iusto
              dignissimos, ullam a quis, molestiae gon veniam perferendis, natus error delectus esse saepe
              laudantium accusantium voluptatum quam?Lorem ipsum. Lorem ipsum, dolor sit amet consectetur
              adipisicing </p>
          </td>
          <td>
            <a href=""><img src={img5} alt="" /></a>
            <a href=""><img src={img6} alt="" /></a>&nbsp;
            <a href=""><img src={fbLogo} alt="" width="30px" /></a><br />
            <a href="">fb.com/naveed.trainer</a>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td width="25%">
            <img src={require('./images/2_t5rcog.jpg')} alt="" width="100%" height="290hv" />
          </td>
          <td valign="top" width="40%">
            <b>Cable Tray</b>
            <p>Lorem ipsum dolor, sit amet consectetur godsadns adipisicing elit. A provident minima tempore
              dignissimos?
              Accusamus rem aliquid aperiam officiis eum impedit quidem۔</p>
            <p>Lorem ipsum dolor, sit amet consectetur godsadns adipisicing elit. A provident minima tempore
              dignissimos?
              Accusamus rem aliquid aperiam officiis eum impedit quidem۔</p>
            <p>Lorem ipsum dolor, sit amet consectetur godsadns adipisicing elit. A provident minima tempore
              dignissimos?
              Accusamus rem aliquid aperiam officiis eum impedit quidem۔</p>
          </td>
          <td valign="top">
            <img src={require('./images/1_xewrnv.jpg')} alt="" width="80%" height="150hv" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad soluta nihil cum labore totam non quis
              quisquam magni iste aut voluptatibus numquam accusantium veniam adipisci neque, recusandae debitis
              fugit jahsj sjka et!</p>
          </td>
        </tr>
      </table>
      <table width="93%">
        <tr>
          <td>
            <ul>
              <li>Ara</li>
              <li>Profile</li>
              <li>Sheet</li>
              <li>170*</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Ara</li>
              <li>Profile</li>
              <li>Sheet</li>
              <li>170*</li>
            </ul>
          </td>
          <td>
            <ol>
              <li>Ara</li>
              <li>Profile</li>
              <li>Sheet</li>
              <li>170*</li>
            </ol>
          </td>
        </tr>
      </table>
      <br />
      <h2 align="center">Join Us</h2>
      <table>
        <tr>
          <td width="68%"></td>
          <td>
            <form action="">
              <input type="text" name="" id="" placeholder="Name" size="30" /><br />
              <input type="text" name="" id="" placeholder="Address" size="30" /><br />
              <input type="text" name="" id="" placeholder="City" size="30" /><br />
              <input type="text" name="" id="" placeholder="STATE" size="9.5" /><br />
              <input type="text" name="" id="" placeholder="ZIP" size="9.5" /><br />
              <select name="" id="">
              <option value=""><b>Newsweek &nbsp;&nbsp;&nbsp;&nbsp;</b></option>
              <option value="">Geo</option>
              </select><br />
              <input type="radio" name="1year" id="" />1 Year <input type="radio" name="1year" />2 Years <br />
              <textarea name="" id="" cols="30" rows="4" placeholder="Comment"></textarea>
            </form>
          </td>
        </tr>
      </table>
      <br />
    </div>
  );
}

export default App;
