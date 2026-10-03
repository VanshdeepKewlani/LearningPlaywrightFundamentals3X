export function spentEarned(amounts: string[]){
    let spentAmount = 0
    let earnedAmount = 0

    amounts.forEach((amount) => {
        const value = Number(amount.replace("USD", "").replace(/,/g, "").replace(" ", ""));
        if(Number.isNaN(value)){
            throw new Error('Cannot parse amount: ' + amount);
        }
        if(value < 0){
            spentAmount += Math.abs(value);
        }
        else{
            earnedAmount += value;
        }
    })
    return { spentAmount, earnedAmount };
}