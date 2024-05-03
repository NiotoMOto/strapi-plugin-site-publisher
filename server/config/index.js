'use strict';

module.exports = {
  default: () => ({
    owner: '',
    repo: '',
    workflow_id: '',
    authorizationHeader: '',
    branch: '',
    inputs: {},
  }),
  validator(config) {
    if (!config.owner) {
      throw new Error('owner is required');
    }
    if (!config.repo) {
      throw new Error('repo is required');
    }
    if (!config.workflow_id) {
      throw new Error('workflow_id is required');
    }
    if (!config.authorizationHeader) {
      throw new Error('authorizationHeader is required');
    }
    if (!config.branch) {
      throw new Error('branch is required');
    }
  },
};
