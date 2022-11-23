public with sharing class applicantProvider {
    
    public static List<Applicant__c> getAllApllicants() {
        List<Applicant__c> Applist = [select Id,First_Name__c, Last_name__c, CreatedBy.name from Applicant__c];
        return Applist;
    }
    
    @AuraEnabled
    public static void createApplicantRecord(Applicant__c objApplicant){
        try {
            insert objApplicant;
        } 
        catch (Exception ex) {
            system.debug(ex.getMessage());
        }
    }
    
    @auraEnabled
    public static list<Adress__c> searchAdresses(Applicant__c objApp){
        try{
            system.debug('inside try');
            Id appId15 = [select id from Applicant__c where Name=:objApp.Name].id;
            return ([select id, Name,Country__c, City__c, State__c from Adress__c where Applicant__c=:appId15]);
        }
        
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @auraEnabled
    public static list<Adress__c> searchAdresses1(string objApp){
        try{
            
            Id applicantId = Id.valueOf(objApp);
            System.debug('#Calling '+applicantId);
            
            return ([select id,Name,Adress_line_1__c, Country__c, City__c, State__c from Adress__c where Applicant__c=:applicantId]);
        }
        
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @auraEnabled
    public static Applicant__c searchApplicant(Applicant__c objApp){
        try {
            return ([select Id,Name, First_Name__c, Last_name__c, Gender__c from Applicant__c where Name=:objApp.Name]);
            
        }
        
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static List<Adress__c> deleteSelectedAddresses(List<Adress__c> adrList, String appID){
        try {
            if(!adrList.isEmpty()){
                Database.delete (adrList,false);
                return ([select Id,Name, Country__c,State__c, City__c from Adress__c where Applicant__c=:appID ]);
            }
            else{
                return null;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}