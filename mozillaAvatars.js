module.exports = {
  name: 'mozillaAvatars',
  startDate: '2015-01-01',
  subjectAttributes: ['email'],
  independentVariables: ['avatarLinkVisible'],
  eligibilityFunction: function (subject) {
    return /@mozilla\.(?:com|org)$/.test(subject.email)
  },
  groupingFunction: function (subject) {
    return {
      avatarLinkVisible: true
    }
  }
}
