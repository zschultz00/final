import React from "react";

export default function Nform() {
  return (
    <form name="contact" method="post">
      <div class="form-group">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group">
          <label htmlFor="name">Name</label> <br />
          <input class="form-control" type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email</label> <br />
          <input class="form-control" type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label htmlFor="message">Message</label> <br />
          <textarea class="form-control" id="message" name="message" required></textarea>
        </div>
        <div class="form-group">
          <input class="btn btn-primary mt-2" type="submit" value="Submit message" />
        </div>
      </div>
    </form>
  );
}
