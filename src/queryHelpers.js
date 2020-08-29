/*
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

export const isLoading = ({
  loading, data, numOfRenders, options,
}) => {
  if (loading) {
    return true;
  }
  if (!data && numOfRenders === 1) {
    if (options.lazy) {
      return false;
    }
    return true;
  }
  return false;
};

export const getData = (data, numOfRenders, options) => {
  if (!data && numOfRenders === 1) {
    return options?.initialData?.data;
  }
  return data;
};

export const getError = (error, numOfRenders, options) => {
  if (!error && numOfRenders === 1) {
    return options?.initialData?.error;
  }
  return error;
};

export const coerceSsrField = (field) => {
  if (!field) {
    return null;
  }
  if (field instanceof Error) {
    return field.toString?.();
  }
  return field;
};
