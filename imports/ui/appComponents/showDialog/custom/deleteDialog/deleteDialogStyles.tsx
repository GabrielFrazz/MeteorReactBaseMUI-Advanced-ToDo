import * as appStyles from '/imports/ui/materialui/styles';

export const deleteDialogStyles = {
	box: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: appStyles.sysSizing.radiusMd,
		padding: appStyles.sysSizing.spacingFixedLg,
		gap: appStyles.sysSizing.spacingFixedLg,
		backgroundColor: 'rgba(255,255,255,0.85)',
		backdropFilter: 'blur(15px)',
		border: '1px solid rgba(255,255,255,0.8)'
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		gap: appStyles.sysSizing.spacingRemMd,
		padding: 0
	}
};
