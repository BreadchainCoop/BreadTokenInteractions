import React from "react";

export function DepositStake({deposit_stake}) {
    return (
        <div>
            <h4>Deposit your tokens</h4>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.target);
                    deposit_stake();
                }}
            >
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" value="Stake 32 LBToken"/>
                </div>
            </form>

        </div>
    );
}
