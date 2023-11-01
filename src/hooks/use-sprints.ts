import {storage} from '../services/mmkv';
import { Sprint } from '../types';
import React from 'react';

export const UseSprints = () => {
 const getSprints = () => {
  const sprintData = storage.getString('sprints');
  const sprintJson: Sprint[] = sprintData ? JSON.parse(sprintData) : [{name: '', startDate: '', endDate: ''}];

  return sprintJson;
 }

 const setSprints = (sprints: Sprint[]) => {
  storage.set('sprints', JSON.stringify(sprints));
 }

  return { getSprints, setSprints };
 }