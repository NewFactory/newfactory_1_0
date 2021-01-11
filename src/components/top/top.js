import './top.css';

function top() {
  return (
    <div className="top">
      <div class="top_menu">
        <div class="top_menu_logo">
          <span>New Factory</span>
        </div>
        <div class="top_menu_items">
          About
          Projects
          Order
          Contact
        </div>
        <div class="top_menu_social_icons">
          <div class="icon_facebook">
            Facebook
          </div>
          <div class="icon_instagram">
            Instagram
          </div>
          <div class="icon_twitter">
            Twitter
          </div>
        </div>
      </div>
      <div class="top_content">
        <h3>New <strong>style</strong></h3>
        <p>space </p>
      </div>
    </div>
  );
}

export default top;
