module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let currentSumArr = 1;
        let depth = 1;
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            currentSumArr += this.calculateDepth(arr[i]);
            if (currentSumArr > depth) {
              depth = currentSumArr;
            }
          }
          currentSumArr = 1;
        }
        return depth;
      }
};