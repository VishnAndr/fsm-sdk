export type DTOName = 'Activity'
  | 'ActivitySubType'
  | 'ActivityTopic'
  | 'Address'
  | 'Alert'
  | 'Approval'
  | 'Attachment'
  | 'BusinessPartner'
  | 'BusinessPartnerGroup'
  | 'BusinessProcessStepDefinition'
  | 'ChecklistCategory'
  | 'ChecklistInstance'
  | 'ChecklistInstanceElement'
  | 'ChecklistTag'
  | 'ChecklistTemplate'
  | 'ChecklistVariable'
  | 'Comment'
  | 'CompanyInfo'
  | 'CompanySettings'
  | 'Consent'
  | 'Contact'
  | 'CrowdExecutionRecord'
  | 'Currency'
  | 'CustomRule'
  | 'EmployeeBranch'
  | 'EmployeeDepartment'
  | 'EmployeePosition'
  | 'Enumeration'
  | 'Equipment'
  | 'Expense'
  | 'ExpenseType'
  | 'FieldConfiguration'
  | 'Filter'
  | 'Function'
  | 'Group'
  | 'Icon'
  | 'Item'
  | 'ItemGroup'
  | 'ItemPriceListAssignment'
  | 'Material'
  | 'Mileage'
  | 'MileageType'
  | 'Notification'
  | 'NowKpi'
  | 'NowPlugin'
  | 'NowPluginInstance'
  | 'NowPluginInstanceSet'
  | 'NowPluginVersion'
  | 'NowShortUrl'
  | 'PaymentTerm'
  | 'Person'
  | 'PersonReservation'
  | 'PersonReservationType'
  | 'PersonWorkTimePattern'
  | 'PlanningScenario'
  | 'Plugin'
  | 'PriceList'
  | 'ProfileObject'
  | 'Project'
  | 'ProjectMemberTimeFrame'
  | 'ProjectPhase'
  | 'ProjectShift'
  | 'Region'
  | 'ReportTemplate'
  | 'Requirement'
  | 'ReservedMaterial'
  | 'SalesOrder'
  | 'SalesQuotation'
  | 'SalesStage'
  | 'ScreenConfiguration'
  | 'SerialNumber'
  | 'ServiceAssignment'
  | 'ServiceAssignmentStatus'
  | 'ServiceAssignmentStatusDefinition'
  | 'ServiceCall'
  | 'ServiceCallCode'
  | 'ServiceCallOrigin'
  | 'ServiceCallProblemType'
  | 'ServiceCallResponsible'
  | 'ServiceCallStatus'
  | 'ServiceCallSubject'
  | 'ServiceCallType'
  | 'Shift'
  | 'ShiftTechnician'
  | 'Skill'
  | 'Tag'
  | 'Tax'
  | 'Team'
  | 'TeamTimeFrame'
  | 'TimeEffort'
  | 'TimeSubTask'
  | 'TimeTask'
  | 'ToolAssignment'
  | 'Translation'
  | 'UdfMeta'
  | 'UdfMetaGroup'
  | 'UdoMeta'
  | 'UnifiedPerson'
  | 'UsedTool'
  | 'UserSyncConfirmation'
  | 'Warehouse'
  | 'WorkTime'
  | 'WorkTimePattern'
  | 'WorkTimeTask'

export type DTOModels = Partial<{
  id: undefined | null | string;
  lastChanged: undefined | null | number;
  externalId: undefined | null | string;
} & Object>;
