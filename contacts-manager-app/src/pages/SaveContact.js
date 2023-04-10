import '../styles/App.scss';
// Website source name: https://codepen.io/abhishekdana/pen/pqdmxX

export function SaveContact() {
  return (
    <div className="addContact">
        <div class="center">
            <h1>Add New Contact</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required/> 
                    <span></span>
                    <label>First Name</label>
                </div>

                <div class="txt_field">
                    <input type="text" required/> 
                    <span></span>
                    <label>Last Name</label>
                </div>
            
                <div class="txt_field">
                    <input type="text" required/> 
                    <span></span>
                    <label>Address</label>
                </div>

                <div class="txt_field">
                    <input type="text" required/> 
                    <span></span>
                    <label>Cell Number</label>
                </div>

                <div class="txt_field">
                    <input type="text" required/> 
                    <span></span>
                    <label>Home Number</label>
                </div>

                <input type="submit" value="Save Contact"/>
                <div class="signup_link"><a href="#">Cancel</a>
                </div>
            </form>
        </div>
    </div>
    );
}