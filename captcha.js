module.exports = {
  name: 'captcha',
  hypothesis: 'a niceCaptcha does not negatively affect signups',
  startDate: '2014-12-15',
  subjectAttributes: ['sessionId'],
  independentVariables: ['niceCaptchaEnabled'],
  eligibilityFunction: function (subject) {
    // a random sampling of 10% of sessions will be in the experiment
    return this.bernoulliTrial(0.1, subject.sessionId)
  },
  groupingFunction: function (subject) {
    // 50% of participants will see a niceCaptcha the rest are the control group
    return {
      niceCaptchaEnabled: this.bernoulliTrial(0.5, subject.sessionId)
    }
  }
}
