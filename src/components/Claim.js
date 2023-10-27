import React from "react";

export function Claim({ claim }) {
  return (
    <div>
      <h4>Claim your accumulated reward</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          claim();
        }}
      >
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Claim reward" />
        </div>
      </form>

    </div>
  );
}
