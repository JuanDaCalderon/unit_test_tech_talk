export class PointsCalculator {
    NORMAL_USER_POINTS_PER_DAY = 10;
    PREMIUM_USER_POINTS_PER_DAY = 20;
    PREMIUM_USER_WEEKS_MULTIPLIER = 1.5;

    /**
     * This calculates the accumulated points of a user who consecutively attends pricesmart based on the type of user 
     * @param {number} days Number consecutive days of the user
     * @param {boolean} isPremium if the user is Premium it needs to be passed as true
     * @returns {number} points calculated based on  NORMAL_USER_POINTS_PER_DAY = 10, PREMIUM_USER_POINTS_PER_DAY = 20, PREMIUM_USER_WEEKS_MULTIPLIER = 1.5
     */
    calculate(days, isPremium = false) {
        if (isPremium) {
            const consecutiveWeeks = Math.floor(days / 7);
            let consecutiveWeeksMultiplier = 1;
            if (consecutiveWeeks > 0) {
                consecutiveWeeksMultiplier = Math.pow(this.PREMIUM_USER_WEEKS_MULTIPLIER, consecutiveWeeks);
            }
            return days * this.PREMIUM_USER_POINTS_PER_DAY * consecutiveWeeksMultiplier;
        } else {
            return days * this.NORMAL_USER_POINTS_PER_DAY;
        }
    }
}
