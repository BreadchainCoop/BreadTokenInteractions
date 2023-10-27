import React from "react";

export function ApproveSpending({ approve_spending }) {
  return (
    <div>
      <h4>Allow the Eigen Strategy Manager to deposit your LB Tokens</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          approve_spending();
        }}
      >
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Approve Spending" />
        </div>
      </form>

    </div>
  );
}
